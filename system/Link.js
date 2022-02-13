import NextLink from 'next/link'
import MUILink from '@mui/material/Link';

export function Link(props) {
  return (
    <NextLink href={props.href}>
      <MUILink variant={props.variant}>{props.children}</MUILink>
    </NextLink>
  )
}