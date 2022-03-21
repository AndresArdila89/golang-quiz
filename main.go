package main

import (
	"app/handle"
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

// type person struct {
// 	Name     string
// 	Lastname string
// }

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
	fp := filepath.Join("public", filepath.Clean(r.URL.Path))

	log.Println(fp)

	tmpl, _ := template.ParseFiles(lp, fp)
	// temp := person{
	// 	Name:     "Andres",
	// 	Lastname: "Ardilla",
	// }
	letters_array := [26]string{
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	}
	tmpl.ExecuteTemplate(w, "layout", letters_array)
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
