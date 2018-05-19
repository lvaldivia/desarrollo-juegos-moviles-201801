package com.upc.project.lib.core.scenes;

import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.scenes.scene2d.Stage;
import com.badlogic.gdx.utils.viewport.Viewport;

/**
 * Created by Alumnos on 19/05/2018.
 */

public abstract class Scene implements Screen{
    protected SpriteBatch spriteBatch;
    protected OrthographicCamera camera;
    protected Viewport viewport;
    protected Stage stage;

    public Scene(SpriteBatch spriteBatch){
        this.spriteBatch = spriteBatch;
        camera  =new OrthographicCamera();
    }

    @Override
    public void show() {

    }

    @Override
    public void render(float delta) {
        if(stage != null){
            stage.draw();
        }
    }

    @Override
    public void resize(int width, int height) {

    }

    @Override
    public void pause() {

    }

    @Override
    public void resume() {

    }

    @Override
    public void hide() {

    }

    @Override
    public void dispose() {
        if(stage != null){
            stage.dispose();
        }
    }

    public void handleInput(float dt){

    }

    public void update(float dt){
        handleInput(dt);
    }
}
