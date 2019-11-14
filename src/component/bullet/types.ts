export interface BulletProps {
    round?:boolean | number;
    className?:string;
    style?:React.CSSProperties | {};
}

export interface DataProps extends BulletProps {
    data:Array<string | number>
}