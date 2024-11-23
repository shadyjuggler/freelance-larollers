
export const Map = () => {
    return (
        <div className="map pb-20 lg:pb-36">
            <h2 className="text-4xl">Service area coverage  </h2>
            <p className="mt-10 text-xl">We also extend our services to San Diego and Las Vegas</p>
            <div className="mt-8 min-h-96 rounded-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423301.07257410284!2d-118.26758712816172!3d34.01719370045062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2slv!4v1732369262108!5m2!1sen!2slv" width="100%" height="500px" style={{borderRadius: "24px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}