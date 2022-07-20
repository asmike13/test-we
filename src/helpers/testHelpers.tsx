/* eslint-disable prefer-const */

import { Provider } from "react-redux";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { store } from "src/store";


export const getRender = (Component: () => JSX.Element, initRoute: string[] = ['/'], path?: string) => {
	return (
		<Provider store={store}>
			<MemoryRouter initialEntries={initRoute}>
				<Routes>
					<Route path="/" element={<Component />} />
					{path && <Route path={path} element={<Component />} />}
					{!path && [...initRoute].map((r, index) => (
						<Route key={index} path={r} element={<Component />} />
					))}
				</Routes>
			</MemoryRouter>
		</Provider>
	)
}

export const waitForData = (store: any, value: any) => new Promise((res) => {
	const loop = (s: any, v: any) => {
		if (JSON.stringify(store) === JSON.stringify(value)) {
			res(true)
		} else {
			setTimeout(() => {
				loop(store, value)
			}, 300);
		}
	}

	loop(store, value)
})

export const waitForElement = (
	container: HTMLElement,
	element: string,
	removed?: boolean,
	valueToEqual?: string,
	length?: number,
) => new Promise((resolve, reject) => {
	let loopTimeout: any;
	let timeout: any;
	let elementFound: any;

	const getTextContent = (el: any) => el?.textContent || el?.value;
	let isFoundAndEqual: any;

	const loop = () => {
		elementFound = valueToEqual
			? container.querySelectorAll(element)
			: container.querySelector(element);

		const isFound = elementFound && !removed && !valueToEqual;
		const isRemoved = !elementFound && removed;
		const isFoundAndLengthEqual = isFound && length && elementFound?.length === length;

		isFoundAndEqual = valueToEqual
			&& Object.values(elementFound).find((el: any) => getTextContent(el) === valueToEqual);

		if (isRemoved || isFound || isFoundAndEqual || isFoundAndLengthEqual) {
			clearTimeout(timeout);
			resolve(isFoundAndEqual || elementFound);
		} else {
			loopTimeout = setTimeout(() => {
				loop();
			}, 100);
		}
	};

	loop();

	timeout = setTimeout(() => {
		clearTimeout(loopTimeout);
		reject(Error(`${element} ${valueToEqual ? `expect ${valueToEqual} get ${getTextContent(Object.values(elementFound)[0])}` : 'not found'}`));
	}, 3000);
});

export const waitForElementToBeRemoved = (
	container: HTMLElement,
	element: string,
) => waitForElement(
	container,
	element,
	true,
);

export const waitForElementToEqual = (
	container: HTMLElement,
	element: string,
	valueToEqual: string,
) => waitForElement(
	container,
	element,
	undefined,
	valueToEqual,
);

export const waitForElementLengthToEqual = (
	container: HTMLElement,
	element: string,
	length: number,
) => waitForElement(
	container,
	element,
	undefined,
	undefined,
	length,
);
