import './dashboard.css'

export default function Dashboard() {
    return (
        <div>
            <nav>
                <div class="logo-name">
                    <div class="logo-image">
                        <img src="./logo192.png" alt="logo" />
                    </div>
                    <span class="logo_name">Chorezone</span>
                </div>
                <div class="menu-items">
                    <ul class="nav-links">
                        <li><a href="https://#">
                            <i class="uil uil-user"></i>
                            <span>Profile</span>
                            </a></li>
                        <li><a href="https://#">
                            <i class="uil uil-house-user"></i>
                            <span>Chores</span>
                            </a></li>
                        <li><a href="https://#">
                            <i class="uil uil-clock-eight"></i>
                            <span>History</span>
                            </a></li>
                        <li><a href="https://#">
                            <i class="uil uil-book-open"></i>
                            <span>Blog</span>
                            </a></li>
                        <li><a href="https://#">
                            <i class="uil uil-setting"></i>
                            <span>Settings</span>
                            </a></li>
                        <li><a href="https://#">
                            <i class="uil uil-comment-question"></i>
                            <span>Help</span>
                        </a></li>
                    </ul>

                    <ul class="logout-mod">
                        <li><a href="https://#">
                            <i class="uil uil-signout"></i>
                            <span>Log Out</span>
                        </a></li>

                        <li><a href="https://#">
                            <i class="uil uil-moon"></i>
                            <span>Dark Mode</span>
                        </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};