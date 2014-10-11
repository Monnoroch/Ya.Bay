package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"encoding/json"
)


var clientId string = "" // TODO: insert
var userToken string = ""


type tokenResp struct {
	AccessToken string `json:"access_token"`
	Error string `json:"error"`
}

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

		code := codeArr[0]
		resp, err := http.PostForm("https://sp-money.yandex.ru/oauth/token", url.Values{
			"code": {code},
			"client_id": {clientId},
			"grant_type": {"authorization_code"},
			"redirect_uri": {"https://msymbolics.com:13001/yamoney"},
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
		
		userToken = obj.AccessToken
	})

	http.HandleFunc("/yamoney_token", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("/yamoney_token", r)
		fmt.Fprintf(w, "%s", userToken)
	})

//	panic(http.ListenAndServe(":13000", nil))
	panic(http.ListenAndServeTLS(":13001", "./ssl/ssl.crt", "./ssl/ssl.key", nil))
}
