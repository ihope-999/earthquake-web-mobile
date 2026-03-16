import { createContext } from "react";

export const LocationContext = createContext<{location:string,
                                              setLocation: (val : string) => void;
}>({location: "", setLocation : (val : string) => {}});

