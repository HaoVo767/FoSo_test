interface ContainerProps {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ ...props }) => {
  const { children } = props
  return <div className="mx-2 my-1 lg:mx-8 overflow-hidden">{children}</div>
}

export default Container
