// Changes the active koala, then re-renders the page to display that koala

import { render } from './index'

export let activeKoala = null

export let selectKoala = koala => {
    activeKoala = koala
    render()
}