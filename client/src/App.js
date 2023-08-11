import React from 'react';

const App = () => {
    <div className="root-container">
            <BrowserRouter>
            <AuthProvider>
                    <Routes>
                        {/* <Route index element={<HomeScreen />} /> */}
                        <Route index element={
                            <Navigate to="/signin" replace />
                        } />
                        <Route path="/signin" element={<SigninScreen />} />
                        <Route path="/dashboard" element={<DashScreen />} />
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                    </Routes>
            </AuthProvider>
            </BrowserRouter>
        </div>
}

export default App;