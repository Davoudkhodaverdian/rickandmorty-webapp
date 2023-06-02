import { useQuery, gql } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Character as ICharacter } from '../../app/models/character';
import Loading from '../shared/loading';
const Character: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    if (isNaN(Number(slug))) {
        //not found
        navigate('/404', { replace: true });
    }
    const GET_CHARACTERSBYID = gql(`query getCharactersById {
        charactersByIds(ids:${slug}) {
            name,image,id,status,species,type,gender,created,location {name},origin {name}
            episode {name,episode,id}
      }
    }`);

    const { loading, error, data } = useQuery(GET_CHARACTERSBYID);
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);
    if (data?.charactersByIds?.length === 0) {
        //not found
        navigate('/404', { replace: true });
    }
    return (
        <div>
            {
                loading ? <div className="h-[500px]"><Loading /> </div> :

                    data?.charactersByIds?.map(({ image, name, episode, origin, location }: ICharacter) => (
                        <div>
                            <img className="rounded " alt={name} src={`${image}`} />
                            <div>
                                name character: {name}
                            </div>
                            <div>
                                The character's origin location : {origin?.name}
                            </div>
                            <div>
                                The character's last known location : {location?.name}
                            </div>
                            <div className='p-2'>
                                Episodes in which this character appeared:
                            </div>
                            <div className='max-h-[200px] p-3 overflow-auto shadow border-t  border-purple-600'>
                                {episode?.map(({ name, episode,id }) => (
                                    <div key={id} className='border-b py-2 border-purple-200'>
                                        <div>{name} {episode}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
            }
        </div>
    )


}

export default Character