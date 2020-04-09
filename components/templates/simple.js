/* eslint-disable no-undef */

import Inline from 'inlinejsx.macro'
import { Link, Box, Text } from './scope'

export const simple = (
  <Inline>
    <>
      <Link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap'
        rel='stylesheet'
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          bg: 'black',
          color: 'white'
        }}
      >
        <Text
          sx={{
            fontFamily: 'Roboto',
            fontSize: 6,
            fontWeight: '700'
          }}
          children={headline}
        />
        <Text
          sx={{
            fontFamily: 'Roboto',
            fontSize: 3,
            fontWeight: '300'
          }}
          children={caption}
        />
      </Box>
    </>
  </Inline>
)