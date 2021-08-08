import React, { useState } from 'react'
import { useDerivedSwapInfo } from 'state/swap/hooks'
import { Field } from 'state/swap/actions'
import { WrappedTokenInfo } from 'state/lists/wrappedTokenInfo'
import { USDC } from 'constants/tokens'
import { Currency } from '@uniswap/sdk-core/dist/index'
export default function CryptoKek() {
  let [tokenAddress, setTokenAddress] = useState('0x30bcd71b8d21fe830e493b30e90befba29de9114')
  const { currencies } = useDerivedSwapInfo()
  let input = currencies[Field.INPUT]
  let output = currencies[Field.OUTPUT]

  if (input instanceof WrappedTokenInfo && !(output instanceof WrappedTokenInfo)) {
    if (input.address !== tokenAddress) {
      setTokenAddress(input.address)
    }
  } else if (output instanceof WrappedTokenInfo && tokenAddress !== output.address) {
    setTokenAddress(output.address)
  } else if (output instanceof Currency && input instanceof WrappedTokenInfo && tokenAddress !== input.address) {
    setTokenAddress(input.address)
  } else if (input === undefined || input === null || output === undefined || output === null) {
    let singleField: Currency = null
    if (input instanceof Currency) {
      singleField = input
    }
    if (output instanceof Currency) {
      singleField = output
    }
    if (singleField !== null) {
      if (singleField.symbol === 'ETH' && tokenAddress !== USDC.address) {
        setTokenAddress(USDC.address)
      }
    }
  }
  function kekFrame($token: string) {
    const CRYPTO_KEK_LINK = `https://keks.app/t/${$token}/chart`
    return {
      __html: `<iframe src=${CRYPTO_KEK_LINK} width="100%" height="749px" frameBorder="0" allowFullScreen="true" scrolling="no" position='absolute'</iframe>`,
    }
  }

  return (
    <div
      className="CryptoKek"
      style={{ width: '100%', height: '100%' }}
      dangerouslySetInnerHTML={kekFrame(tokenAddress)}
    ></div>
  )
}