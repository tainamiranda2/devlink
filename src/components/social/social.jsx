import './social.css';

export function Social({url, children}){
    return(
        <div>
            <a className='social' href={url}>
                {children}
                </a>
        </div>
    )
}