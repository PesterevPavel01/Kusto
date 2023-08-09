import Elements from './Elements';

function Main()
{
    return(
        <main >
            <section className="profile">
                <div className="profile__avatar"></div>
                    <div className="profile__flex-row">
                        <div className="profile__info">
                            <div className="profile__info-text-row">
                                <h1 className="profile__info-title">Жак-Ив Кусто</h1>
                                <div className="profile__info-edit-button">
                                </div>
                            </div>
                            <p className="profile__info-text">Исследователь океана</p>
                        </div>
                    </div>
                    <div className="profile__add-button"><div/>
                    <div className="profile__vector"></div>
                </div>

            </section>

            <Elements/>

        </main>

    )
}
export default Main;