/// <reference types= "cypress" />

import { endpoints } from "./Endpoints"

export class ApiService {
    
    createUser(userName, password) {
        return cy.request(
            {
                method: 'POST',
                url: endpoints.BASE_URL + endpoints.ACCOUNT + endpoints.USER,
                body:
                {
                    userName: userName,
                    password: password
                },
                failOnStatusCode: false
            }
        )
    }

    generateToken(userName, password) {
        return cy.request(
            {
                method: 'POST',
                url: endpoints.BASE_URL + endpoints.ACCOUNT + endpoints.GENERATE_TOKEN,
                body:
                {
                    userName: userName,
                    password: password
                },
                failOnStatusCode: false
            }
        )
    }

    getAllBooks() {
        return cy.request(
            {
                method: 'GET',
                url: endpoints.BASE_URL + endpoints.BOOKSTORE + endpoints.BOOKS,
                failOnStatusCode: false
            }
        )
    }

    postBook(userId, token, isbn) {
        return cy.request(
            {
                method: 'POST',
                url: endpoints.BASE_URL + endpoints.BOOKSTORE + endpoints.BOOKS,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body:
                {
                    userId: userId,
                    collectionOfIsbns: [
                        {
                            isbn: isbn
                        }
                    ]
                },
                failOnStatusCode: false
            }
        )
    }

    deleteBook(token, isbn, userId) {
        return cy.request(
            {
                method: 'DELETE',
                url: endpoints.BASE_URL + endpoints.BOOKSTORE + endpoints.BOOK,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body:
                {
                    isbn: isbn,
                    userId: userId
                },
                failOnStatusCode: false
            }
        )
    }

}

export const apiService = new ApiService()