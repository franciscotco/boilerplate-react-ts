// styled.d.ts
import 'styled-components';

// Types
import { ITheme } from './theme';

/*
 *
 */
declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
