import React, { useState } from 'react'
import { tokens, categories } from './tokens'
import { menu } from './menu'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Tokens from './pages/Tokens'
import Navigation from './pages/Navigation'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

function App() {

  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            background: '#FFFFFF',
            boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.04)',
            borderRadius: ' 24px',
            width: ' 311px',
            padding: '8px',
            minHeight: 'unset',
            minWidth: 'unset',
            boxSizing: 'border-box'
          },
          indicator: {
            background: 'linear-gradient(201.66deg, #B380FD 12.94%, #6347F5 78.23%)',
            boxShadow: ' 0px 3px 5px rgba(0, 0, 0, 0.07)',
            borderRadius: '16px',
            height: '100%',
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            height:' 14px',
            padding: '16px 8px',
            margin: '0 2px',
            boxSizing: 'border-box',
            textTransform: 'initial',
            minWidth: 'unset',
            minHeight: 'unset',
            lineHeight: '100%',
            color: '#93949D',
            '&.Mui-selected': {
              zIndex: '9999',
              color: '#FFF',
            },
            '&.Mui-active': {
              opacity: 0,
            },
          },
        },
      },
      MuiAccordion : {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            margin: '4px 0',
            ':first-of-type': {
              borderRadius: '16px',
            },
            ':last-of-type': {
              borderRadius: '16px',
            },
            ':before': {
              opacity: 0,
            }
          }
        }
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Tokens />} />
            <Route path="search" element={<div></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
