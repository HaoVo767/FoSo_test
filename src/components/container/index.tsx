interface ContainerProps {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ ...props }) => {
  const { children } = props
  return <div className="mx-2 lg:mx-2 overflow-hidden">{children}</div>
}

export default Container
