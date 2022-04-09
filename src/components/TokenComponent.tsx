import { Accordion, AccordionDetails, AccordionSummary, Icon } from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import { tokens } from '../tokens'
import { FC } from 'react'

type Item = typeof tokens[0]

const TokenComponent: FC<Item> = (item) => {


  const getTokenPriceChange = (price: number) => {
    if (price === 0) {
      return <span className="token__priceNeutral">{price}%</span>
    } else if (price < 0) {
      return <span className="token__priceDecreased">{price}%</span>
    } else {
      return (
        <span className="token__priceIncreased">{'+' + price}%</span>
      )
    }
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<KeyboardArrowDownRoundedIcon sx={{color: '#6347F5'}} />}>
        <div className="token">
          <div className="token__label">
            <div className="token__id">#{item.id}</div>
            <div className="token__label-inner">
              <div className="token__logo">
                <img src={item.logoURI} alt="logo" />
              </div>
              <div className="token__calling">
                <p className="token__name">{item.name}</p>
                <p className="token__symbol">{item.symbol}</p>
              </div>
            </div>
          </div>

          <div className="token__cost">
            <p className="token__price">{item.price} $</p>
            <p className="token__priceChange">
              {getTokenPriceChange(item.priceChange.hours24)}
              <span className="price-dot"></span>
              {getTokenPriceChange(item.priceChange.days7)}
              <span className="price-dot"></span>
              <span className="token__priceDecreased"></span>
              {getTokenPriceChange(item.priceChange.days365)}
            </p>
          </div>
          <div className="token__value">
            <div className="token__volume">{item.volume} $</div>
            <div className="token__volumePercentage">{item.volumeChangePercentage}%</div>
          </div>
          <div className="token__totalValue">
            <div className="token__tvl">{item.tvl} $</div>
            <div className="token__tvlPercentage">{item.tvlChangePercentage}%</div>
          </div>

          <div className="token__users">
            <Icon component={PeopleAltOutlinedIcon} />
            <div className="token__usersNumber">{item.users}</div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="token__description">{item.description}</div>
      </AccordionDetails>
    </Accordion>
  )
}

export default TokenComponent
