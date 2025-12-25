
export const RenderMdx = async ({loader}: {loader: (() => Promise<any> ) | null}) => {
    let C = null;
    if ( loader ) {
        C = loader ?  (await loader()).default : null;
    }
    return C ? <C /> : null;
}