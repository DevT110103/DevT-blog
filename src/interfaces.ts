export interface NavList {
  id: number;
  name: string;
  link: string;
}

export interface ModifierAmountCircle {
  gettingStarted?: boolean;
  technology?: boolean;
  lifeStyle?: boolean;
  places?: boolean;
  health?: boolean;
}

export interface CurrentUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
}
