export interface IFuel {
  id: number;
  name: string;
  price: number;
}

export type FuelComponentsProps = {
  editMode: boolean;
  toggleEditMode: () => void;
}