// import React, {FC, useContext, useState} from 'react';
//
// interface IAppContext {
//     toggle: () => void,
//     playGround: boolean
// }
//
// const AppContext = React.createContext<IAppContext>({});
//
//
// export const useApp = () => {
//     return useContext(AppContext)
// }
//
// interface IAppProvider {
//     children: React.ReactNode
// }
//
// export const AppProvider:FC<IAppProvider> = ({children}) => {
//     const [playGround, setPlayGround] = useState(true)
//     const toggleForm = () => setPlayGround(prev => !prev)
//
//     return (
//         <AppContext.Provider value = {{
//             playGround,
//             toggleForm
//         }}>
//             {children}
//         </AppContext.Provider>
//     );
// }
//
// export default AppContext;
