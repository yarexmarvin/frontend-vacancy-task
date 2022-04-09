import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Icon,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import { tokens } from '../tokens'
import { Box, styled } from '@mui/system'
import { useState } from 'react'
import TokenComponent from '../components/TokenComponent'

const Tokens = () => {
  const [category, setCategory] = useState<string>('all')

  const changeCategory = (e: React.SyntheticEvent, newCategory: string) => {
    setCategory(newCategory)
  }

  console.log(category)

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h1"
          sx={{
            color: '#000',
            fontSize: '36px',
            lineHeight: '120px',
            marginLeft: '24px',
          }}
        >
          Токены Everscale
        </Typography>
        <Tabs centered value={category} onChange={changeCategory}>
          <Tab label="Все" value="all" />
          <Tab label="DeFi" value="defi" />
          <Tab label="Wallets" value="wallets" />
          <Tab label="Games" value="games" />
          <Tab label="DEX" value="dex" />
        </Tabs>
      </Box>

      <div className="tokens">
        {tokens
          .filter(
            (element) => element.categories.includes(category) || category === 'all',
          )
          .map((token, index) => (
             <TokenComponent key={index} {...token} />
          ))}
      </div>
    </Container>
  )
}

export default Tokens
