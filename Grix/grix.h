#pragma once
#include <string>


namespace Grix {

	struct Size {
		int x = 0;
		int y = 0;
		Size(int new_x, int new_y);
	};

	class Window {
	public:
		Window(std::string title);
		~Window();
		//Startup Functions
	public:
		void init(void renderLoop(void));
		void render();
		//Configuration functions
	public:
		void setWindowSize(Size newSize);
		void setWindowSize(int x, int y);
		//Private Functions
	private:
		void onResize(int x, int y);
		//Private Variables
	private:
		std::string title = "main title";
		Grix::Size size = Size(800, 480);
	};

}
