import { makeAutoObservable } from "mobx";
import { IHelloState } from "../interfaces/state.interface";

export default class HelloStore implements IHelloState {
  loading = false;
  error: string | null = null;
  result: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.loading = false;
    this.error = null;
    this.result = null;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setSuccess = (value: string | null) => {
    this.result = value;
  };

  setError = (value: string) => {
    this.error = value;
  };
}
