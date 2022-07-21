import { store } from 'src/store'
import { render } from "@testing-library/react"
import { getRender, waitForData, waitForElement, waitForElementToEqual } from "src/helpers/testHelpers"
import Character from 'src/components/characters/containers/CharacterContainer'

it('should follow the current process of fetching loading and display', async () => {
	const { container } = render(getRender(Character, ['/', '/character/1'], '/character/:characterId'))
	let data

	// // loading
	data = await waitForData(store.getState().characters.status, 'pending')
	expect(data).toBeTruthy()
	await waitForElement(container, '.loader')

	await waitForElementToEqual(container, '.navbar-title', 'The Daughter of the Dusk')
	await waitForElement(container, '.character-infos-list')
})

it('should display not found', async () => {
	const { container } = render(getRender(Character, ['/', '/character/1000000'], '/character/:characterId'))

	await waitForElement(container, '.section-title')
	expect(/Character not found/.test(container.innerHTML)).toBeTruthy()
})