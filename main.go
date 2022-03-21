package main

import (
	"app/handle"
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

func main() {

	fileServer := http.FileServer(http.Dir("./public/"))
	http.Handle("/public/", http.StripPrefix("/public/", fileServer))

	http.HandleFunc("/", serveTemplate)
	http.HandleFunc("/play", playRound)

	log.Println("Starting the web server at port 8080")
	http.ListenAndServe(":8080", nil)
}

func serveTemplate(w http.ResponseWriter, r *http.Request) {
	lp := filepath.Join("public/template", "layout.html")
	fp := filepath.Join("public/template", filepath.Clean(r.URL.Path))

	tmpl, _ := template.ParseFiles(lp, fp)
	tmpl.ExecuteTemplate(w, "layout", nil)
}

func playRound(w http.ResponseWriter, r *http.Request) {

	result := handle.RandomNumGen()
	log.Println(result)
	out, err := json.MarshalIndent(result, "", "    ")
	if err != nil {
		log.Println(err)
		return
	}
	log.Println(out)
	w.Header().Set("Content-Type", "application/json")
	w.Write(out)
}
