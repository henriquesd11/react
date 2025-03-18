function List () {
    const list = [
        {
            id: 1,
            name: 'Luiz'
        },
        {
            id: 2,
            name: 'Gabi'
        },
        {
            id: 3,
            name: 'Diana'
        },
    ];

    return (
        <div>
            {list.map((item) =>  (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    );
}

export default List;