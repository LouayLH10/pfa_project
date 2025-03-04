export async function generateStaticParams() {
    return [
      { id: 'signin' },  
      { id: 'login' },
      { id: 'forgotpwd' }
    ]; 
}

export default function PostPage({ params }) {
    return <h1>Post ID: {params.id}</h1>;
}
