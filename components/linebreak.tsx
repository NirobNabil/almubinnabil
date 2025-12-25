

export const Br = ({count}: {count?: number}) => {
    const c = count ?? 1;
    return c && Array(c).fill(0).map( (_, i) => <br key={i} /> ) ;
}

export default Br;