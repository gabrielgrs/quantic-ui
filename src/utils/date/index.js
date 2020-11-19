import { isValid, parseISO, format as dateFNS } from 'date-fns'

export const dateDefaultFormat = 'dd/MM/yyyy'

export const formatToDefaultDate = (date) => isValid(parseISO(date)) && dateFNS(parseISO(date), dateDefaultFormat)
