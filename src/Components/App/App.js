import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills';
import Blog from '../Blog/Blog'
import { useQuery, gql } from '@apollo/client'
// import { GraphQLClient, gql } from 'graphql-request'

// const graphCMS = new GraphQLClient('https://us-west-2.cdn.hygraph.com/content/clede0qu54mq801t6058sd0e0/master')

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





const App = () => {
//   const { data, loading, error } = useQuery(QUERY)

//   if (loading) return 'loading...'
//   if (error) return <pre>{error.message}</pre>

//   console.log(data)

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/blog' element={<Blog />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
