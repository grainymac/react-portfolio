import React, { useState, useEffect } from 'react'
import './Blog.scss'
import { GraphQLClient, gql } from 'graphql-request'

const graphCMS = new GraphQLClient('https://us-west-2.cdn.hygraph.com/content/clede0qu54mq801t6058sd0e0/master')

const QUERY = gql`
    {
        posts {
            id,
            title,
            datePublished,
            slug,
            content {
                html
            }
            author {
                name,
                avatar {
                    url
                }
            }
            coverPhoto {
                publishedAt {
                    createdBy {
                        id
                    }
                    url
                }
            }
        }
    }
`

export async const getAPI

const Blog = () => {

    const [post, setPost] = useState([])

    useEffect(() => {

    }, [])
    return (
        <div>

        </div>
    )
}

export default Blog