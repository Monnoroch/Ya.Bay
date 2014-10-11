package main

import (
	"fmt"
	"time"
	"strings"
	"strconv"
	"io/ioutil"
	"net/http"
	"net/url"
	"encoding/json"
)


var clientId string = "" // TODO: insert

type tokenResp struct {
	AccessToken string `json:"access_token"`
	Error string `json:"error"`
}

type userBid struct {
	UserId string
	Amount float64
}

var tokens map[string]string
var bids map[string][]userBid

func main() {
	fmt.Println("Start!")
	http.HandleFunc("/yamoney", func(w http.ResponseWriter, r *http.Request) {
		defer fmt.Fprintf(w, "%s", "<html><head><script>window.close();</script></head><body></body></html>")
		fmt.Println("/yamoney", r)
		r.ParseForm()
		codeArr, ok := r.Form["code"]
		if !ok {
			fmt.Println("Error: no code in", r)
			return
		}

		idArr, ok := r.Form["id"]
		if !ok {
			fmt.Println("Error: no id in", r)
			return
		}

		id := idArr[0]
		code := codeArr[0]
		resp, err := http.PostForm("https://sp-money.yandex.ru/oauth/token", url.Values{
			"code": {code},
			"client_id": {clientId},
			"grant_type": {"authorization_code"},
			"redirect_uri": {"https://msymbolics.com:13001/yamoney?id=" + id},
		})
		if err != nil {
			fmt.Println("Error:", err)
			return
		}
		defer resp.Body.Close()
		buf, err := ioutil.ReadAll(resp.Body)
		var obj tokenResp
		if err := json.Unmarshal(buf, &obj); err != nil {
			fmt.Println("Error:", err)
			return
		}

		tokens[id] = obj.AccessToken
	})

	http.HandleFunc("/yamoney_token", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("/yamoney_token", r)
		r.ParseForm()
		idArr, ok := r.Form["id"]
		if !ok {
			fmt.Println("Error: no id in", r)
			return
		}

		fmt.Fprintf(w, "%s", tokens[idArr[0]])
	})

	http.HandleFunc("/yamoney_create", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("/yamoney_create", r)
		idArr, ok := r.Form["id"]
		if !ok {
			fmt.Println("Error: no id in", r)
			return
		}

		itemArr, ok := r.Form["item"]
		if !ok {
			fmt.Println("Error: no item in", r)
			return
		}

		timeArr, ok := r.Form["time"]
		if !ok {
			fmt.Println("Error: no time in", r)
			return
		}

		dur, err := strconv.Atoi(timeArr[0])
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		creatorId := idArr[0]
		item := itemArr[0]

		go func() {
			<-time.After(time.Duration(dur) * time.Second)
			bidsArr := bids[item]
			delete(bids, item)

			if len(bidsArr) == 0 {
				return // nothing to do
			}

			maxi := 0
			max := 0.0
			premax := 0.0
			for i, v := range bidsArr {
				if v.Amount > max {
					premax = max
					maxi = i
					max = v.Amount
				}
			}

			bidderId := bidsArr[maxi].UserId
			token := tokens[bidderId]
			amount := premax

			reqData := url.Values{
				"pattern_id": {"p2p"},
				"to": {creatorId},
				"amount": {fmt.Sprintf("%d", amount)},
				"message": {"Apple iPhone 5S 16Gb продан!"},
				"comment": {"Apple iPhone 5S 16Gb продан за " + fmt.Sprintf("%d", amount) + " рублей пользователю " + bidderId + "."},
				"test_payment": {"true"},
				"test_result": {"success"},
			}

			req, err := http.NewRequest("POST", "https://money.yandex.ru/api/request-payment", strings.NewReader(reqData.Encode()))
			if err != nil {
				fmt.Println("Error:", err)
				return
			}

			req.Header.Add("Authorization", "Bearer " + token)
			client := &http.Client{}
			resp, err := client.Do(req)
			if err != nil {
				fmt.Println("Error:", err)
				return
			}
			defer resp.Body.Close()
		}()
	})

	http.HandleFunc("/yamoney_bid", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("/yamoney_bid", r)
		idArr, ok := r.Form["id"]
		if !ok {
			fmt.Println("Error: no id in", r)
			return
		}

		itemArr, ok := r.Form["item"]
		if !ok {
			fmt.Println("Error: no item in", r)
			return
		}

		amountArr, ok := r.Form["amount"]
		if !ok {
			fmt.Println("Error: no amount in", r)
			return
		}

		amount, err := strconv.ParseFloat(amountArr[0], 64)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		id := idArr[0]
		item := itemArr[0]
		bids[item] = append(bids[item], userBid{
			UserId: id,
			Amount: amount,
		})
	})

//	panic(http.ListenAndServe(":13000", nil))
	panic(http.ListenAndServeTLS(":13001", "./ssl/ssl.crt", "./ssl/ssl.key", nil))
}
