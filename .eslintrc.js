module.exports = {
	globals: {
		__webpack_nonce__: true,
		__webpack_public_path__: true,
		_: true,
		$: true,
		moment: true,
		escapeHTML: true,
		oc_userconfig: true,
		dayNames: true,
		firstDay: true,
	},
	extends: ['@nextcloud'],
	rules: {
		'no-tabs': 'warn',
		// TODO: make sure we fix this as this is bad vue coding style.
		// Use proper sync modifier
		'vue/no-mutating-props': 'warn',
	},
}
