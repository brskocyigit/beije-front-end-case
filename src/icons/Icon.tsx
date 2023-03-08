import React from 'react'
//Icon propları için type check
interface IProps {
    children?: any
    className: string
}

//Iconların SVG elementleri için hazırlanmış template function component
const Svg: React.FC<IProps> = ({ children, className }) => {
    return (
        <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
            {children}
        </svg>
    )
}

//Navbar Icons

export const LogoIcon: React.FC<IProps> = ({ className }) => {
    return (
        <Svg className={className}>
            <g>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        className="beije_logo02_svg__st0"
                        d="M191.13 291.98c-19.73 21.7-44.58 32.35-74.97 32.35-11.84 0-24.86-3.16-38.67-9.47-13.81-6.31-24.07-15-30.78-26.04v32.35H.95V0H47.9v141.65c6.71-11.05 16.57-19.73 30.38-25.65 13.81-6.31 26.83-9.47 39.06-9.47 30.78 0 55.64 11.05 74.57 33.14 19.34 22.1 28.8 47.35 28.8 75.36.01 29.61-9.85 55.25-29.58 76.95zM47.11 215.43c0 18.54 5.92 34.33 17.36 47.35 11.83 12.63 27.22 18.94 45.77 18.94 18.54 0 33.93-6.31 45.37-18.94 11.84-13.02 17.76-28.8 17.76-47.35s-5.92-34.33-17.76-47.35c-11.44-13.02-26.83-19.34-45.37-19.34-18.55 0-33.94 6.31-45.77 19.34-11.44 13.03-17.36 28.81-17.36 47.35zM295.67 229.64c.39 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.44 15.39 42.61 15.39 26.44 0 45.38-11.05 56.82-32.75l33.93 22.49c-17.76 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.37-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.23 46.17 27.23 78.91 0 6.31-.4 11.05-.79 14.6h-159.8zm2.36-35.51h110.48c-1.58-29.6-24.86-47.74-54.84-47.74-28.8 0-51.3 18.94-55.64 47.74zM498.06 20.52c12.23-12.63 31.17-12.63 43.4 0 12.23 12.23 12.23 31.17 0 43.4-12.23 12.23-31.17 12.23-43.4 0-12.23-12.23-12.23-31.17 0-43.4zm45.37 300.66h-46.95v-210.7h46.95v210.7zM648.38 110.48v235.56c0 53.27-25.65 79.71-76.55 79.71-7.5 0-14.6-1.18-21.3-3.16v-41.04c3.55 1.18 7.5 1.58 11.83 1.58 28.02 0 38.67-10.66 38.67-42.22V110.48h47.35zm7.5-68.26c0 16.97-14.2 30.77-31.57 30.77-16.97 0-30.78-13.81-30.78-30.77 0-16.97 13.81-31.17 30.78-31.17 17.36 0 31.57 14.2 31.57 31.17zM737.15 229.64c.4 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.43 15.39 42.61 15.39 26.43 0 45.37-11.05 56.82-32.75l33.93 22.49c-17.75 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.38-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.22 46.17 27.22 78.91 0 6.31-.39 11.05-.79 14.6H737.15zm2.37-35.51H850c-1.58-29.6-24.86-47.74-54.85-47.74-28.8 0-51.29 18.94-55.63 47.74z"
                    ></path>
                </svg>
            </g>
        </Svg>
    )
}

export const GroceryIcon: React.FC<IProps> = ({ className }) => {
    return (
        <Svg className={className}>
            <g>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        d="M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 0 1 .213.185c.059.092.076.213.111.457L4.571 6m0 0 1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 0 0 .853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 0 0 .841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 0 0-.22-.266C21.532 6 21.366 6 21.034 6H4.571ZM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                        stroke="#343131"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </g>
        </Svg>
    )
}

export const AuthIcon: React.FC<IProps> = ({ className }) => {
    return (
        <Svg className={className}>
            <g>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                        stroke="#343131"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </g>
        </Svg>
    )
}

//Social Media Icons
export const FacebookIcon: React.FC<IProps> = ({ className }) => {
    return (
        <Svg className={className}>
            <g>
                <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
            </g>
        </Svg>
    )
}

//Hamburger Menu Icon
export const HamburgerIcon: React.FC<IProps> = ({ className }) => {
    return (
        <Svg className={className}>
            <g>
                <path d="M3 12h18M3 6h18M3 18h18" stroke="#343131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </Svg>
    )
}

//Close Menu Icon
export const CloseMenuIcon: React.FC<IProps> = ({ className }) => {
    return (
        <Svg className={className}>
            <g>
                <path d="M18 6 6 18M6 6l12 12" stroke="#343131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </Svg>
    )
}

//Repeat Icon
export const RepeatIcon: React.FC<IProps> = ({ className }) => {
    return (
        <Svg className={className}>
            <g>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" strokeWidth="1">
                    <path
                        d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3"
                        stroke="#343131"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </g>
        </Svg>
    )
}
