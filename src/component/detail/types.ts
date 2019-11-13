export interface DetailProps {
    dcolumn?:boolean;
    divider?:boolean;
    className?:string;
    left?:{name:string; role?:string}
    right?:React.Component | {};
    style?:React.CSSProperties | {};
    name?:string;
}