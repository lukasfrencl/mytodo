import { styled } from '@mui/material/styles'

import ListItemText from '@mui/material/ListItemText'

const CompletedListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.grey['500'],
  textDecoration: 'line-through',
}))

export default CompletedListItemText
