import { Character } from "../../../../app/models/character";
import { Link } from 'react-router-dom';

interface Props {
    data: Character[]
}
const Items: React.FC<Props> = ({ data }) => {

    return (
        <>
            {data?.length === 0 ? <div>there is nothing to show</div> :
                data?.map(({ id, name, image }: Character) => (
                    <div key={id} className="">
                        <Link to={`character/${id}`}>
                            <div className="rounded m-3 shadow-lg bg-white">
                                <div className="overflow-hidden">
                                <img className="rounded-t mx-auto hover:scale-110 transition" alt={name} src={`${image}`} />
                                </div>
                                <div className="m-3">
                                    <h3>{name}</h3>
                                    <br />
                                    <div className="p-2 pb-4">
                                    <button className="w-full p-1 rounded text-white text-center bg-violet-500 drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300">
                                        more information
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default Items;