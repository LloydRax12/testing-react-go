package main

import "fmt"

func GetAPIEndpoint(baseEndpoint string) string {
	return baseEndpoint
}

// GetTodoAPIEndpointWithID returns the API endpoint with the specified ID using string concatenation
func GetTodoAPIEndpointWithID(id int) string {
	return TodoEndpoint + fmt.Sprintf("%d", id)
}
