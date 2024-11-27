export const Dd = ({ icon, placeholder }) => {
    return (
        <div className="relative">
            <div className="w-8 absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={icon} alt="clock" />
            </div>
            <select id="countries" class="helvetia input ">
                <option selected>{placeholder}</option>
                <option value="15min">15 minuts</option>
                <option value="30min">30 minuts</option>
                <option value="1h">1 hour</option>
                <option value="2h">2 hours</option>
            </select>
        </div>


    )
}