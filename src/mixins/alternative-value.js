import MixinTypes from '../utils/MixinTypes'
import paramCase from 'param-case'

/**
 * Condition mixins are shortcuts to check if a prop/state fulfills a given expression
 * Therefore it uses Component which gets provided as part of arguments to validate props/state
 */
export default [{
	key: '',
	type: MixinTypes.INCLUDE,
	fn: (key, styles, args) => {
			if (styles instanceof Array){
				return {
					[key]: styles.join(';' + paramCase(key) + ':')
				}
			}
		}
}]