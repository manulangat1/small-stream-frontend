
export interface ConditionButtonTypes {
	condition?: string;
	common?: ButtonTypes;
}

export type ButtonTypes = {
	background?: string | undefined;
	radius?: string | undefined;
	height?: string | undefined;
	width?: string | undefined;
	color?: string | undefined;
	padding?: string | undefined;
	roundSvgBackground?: string | undefined;
	arrowSvgColor?: string | undefined;
	icon?: string | undefined;
	iconColor?: string | undefined;
	margin?: string | undefined;
	alignItems?: string | undefined;
	image?: string | undefined;
	textTransform?: any;
	fontSize?: string | undefined;
	borderBottomRightRadius?: string | undefined;
	borderBottomLeftRadius?: string | undefined;
	borderTopRightRadius?: string | undefined;
	borderTopLeftRadius?: string | undefined;
	fontWeight?: any;
};

export interface LoginState {
	showPassword: boolean;
}

export type CustomRadioTypes = {
	items: Items[];
	defaultValue?: string;
	genderChoice?:any;
	componentWidth?:boolean;
};
export type defaulfCustomRadionType = {
	defaultValue?: string;
};
type Items = {
	label: string;
	value: string;
	id: number;
};

export interface CommonButtonTypes {
	command?: any;
	condition?: any | undefined;
	onClick?: any;
	disabled?: boolean | undefined;
	id?: any;
	common?: ButtonTypes;
}
