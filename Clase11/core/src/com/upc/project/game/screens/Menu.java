package com.upc.project.game.screens;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.scenes.scene2d.Stage;
import com.badlogic.gdx.scenes.scene2d.ui.Label;
import com.badlogic.gdx.scenes.scene2d.ui.Table;
import com.badlogic.gdx.utils.Align;
import com.badlogic.gdx.utils.viewport.FitViewport;
import com.upc.project.game.Config;
import com.upc.project.lib.core.scenes.Scene;

/**
 * Created by Alumnos on 19/05/2018.
 */

public class Menu  extends Scene{
    public Menu(SpriteBatch spriteBatch) {
        super(spriteBatch);
        viewport = new FitViewport(Config.GAME_WIDTH,
                Config.GAME_HEIGHT,new OrthographicCamera());
        stage = new Stage(viewport,spriteBatch);
        Table table = new Table();
        table.setFillParent(true);
        Label welcomeLabel = new Label("Click to start",
                                new Label.LabelStyle(new BitmapFont(),
                                                    Color.WHITE));

        welcomeLabel.setAlignment(Align.center);
        table.add(welcomeLabel).expandX();
        stage.addActor(table);


    }

    @Override
    public void render(float delta) {
        super.render(delta);
    }

    @Override
    public void handleInput(float dt) {
        super.handleInput(dt);
        if(Gdx.input.justTouched()){
            dispose();
        }
    }

    @Override
    public void dispose() {
        super.dispose();
    }
}
