/* eslint-disable no-use-before-define */

import Inline from '../inline.macro'
import { Text, Flex, Link, Box } from './scope'

const code = (
  <Inline>
    <>
      <Link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap'
        rel='stylesheet'
      />
      <Box
        sx={{
          background: query.gradient,
          borderRadius: 4,
          padding: query.border
        }}
      >
        <Flex
          sx={{
            bg: query.bg,
            height: '100%'
          }}
        >
          <Text
            css={`
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
            sx={{
              pt: 5,
              pl: 5,
              fontSize: 7,
              background: query.gradient,
              fontWeight: '800',
              fontFamily: 'Open Sans',
              bg: query.bg,
              maxWidth: '36rem'
            }}
            children={query.title}
          />
        </Flex>
      </Box>
    </>
  </Inline>
)

const query = {
  title: 'Craft quality editorial flows in Premier Pro',
  gradient: 'linear-gradient(to right, #ed4264, #ffedbc)',
  border: '10px',
  bg: 'black'
}

export default { name: 'adobe', code, query }