import React from 'react';
import Input from '../../components/UI/FormItems/Input';


const Contact = () => {
    return (
        <main className='page page__contact'>
            <div className='container'>
                <h1>Contact page</h1>
                <div>
                    <div className='desc'>
                        <p>Id nostrud commodo occaecat dolore ut. Sunt deserunt pariatur ipsum enim laborum sint ipsum dolore deserunt deserunt quis fugiat non. Adipisicing dolor eu sint labore. Adipisicing voluptate cillum eiusmod deserunt. Cupidatat magna sunt ex Lorem consequat ad mollit. Nulla culpa proident magna adipisicing eiusmod Lorem. Voluptate aliqua ea nisi tempor cillum tempor non aliqua cupidatat ad.</p>
                    </div>
                    <div>
                        <form>
                            <Input 
                                type="text"
                                placeholder="Your name..."
                                label="Name:"
                                id="name"
                            />
                            <Input 
                                type="email"
                                placeholder="Your email..."
                                label="E-mail:"
                                id="email"
                            />
                            <Input 
                                type="phone"
                                placeholder="Your phone..."
                                label="Phone:"
                                id="phone"
                            />
                            <button>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;