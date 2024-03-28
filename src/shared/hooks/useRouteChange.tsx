const useRouteChange = () => {
    const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem)

    return {activeRoute, setActiveRoute}
}

export default useRouteChange