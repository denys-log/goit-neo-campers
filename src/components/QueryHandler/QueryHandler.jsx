import { ColorRing } from 'react-loader-spinner';

export default function QueryHandler({ children, isLoading, isError }) {
  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return children;
}
