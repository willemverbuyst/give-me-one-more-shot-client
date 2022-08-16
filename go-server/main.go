package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type patient struct {
	Name string `json:"name"`
}

var patients = []patient{{Name: "sjaak"}}

func getPatients(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, patients)
}

func main() {
	router := gin.Default()
	router.GET("/patients", getPatients)
	router.Run("localhost:9090")

}
