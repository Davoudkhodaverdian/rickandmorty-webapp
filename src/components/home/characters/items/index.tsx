import { Character } from "../../../../app/models/character";

interface Props {
    data: Character[]
}
const Items: React.FC<Props> = ({ data }) => {

    return (
        <>
            {data?.length === 0 ? <div>there is nothing to show</div> :
                data?.map(({ id, name, image }: Character) => (
                    <div key={id} className="">
                        <div className="rounded m-3 shadow-lg bg-white">
                            <img className="rounded-t mx-auto" alt={name} src={`${image}`} />
                            <div className="m-3">
                                <h3>{name}</h3>
                                <br />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Items;